import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

    // info del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Confirma tu cuenta',
        text: 'Confirma tu cuenta en UpTask',
        html: `
            <p>Hola: ${nombre} comprueba tu cuenta en UpTask</p>
            <p>
                Tu cuenta ya esta casi lista, solo debes confirmarla dando click en el siguiente enlace:
                <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Confirmar cuenta</a>
            </p>
            <p>Si no create esta cuenta, puedes ignorar el mensaje</p>            
        `
    })
}

export const emailResetPassword = async (datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

    // info del email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Reestablece tu contraseña',
        text: 'Reestablece tu cuenta en UpTask',
        html: `
            <p>Hola: ${nombre} has solicitado reestablecer tu cuenta en UpTask</p>
            <p>
                Dale click al siguiente enlace para generar tu nueva contraseña: 
                <a href='${process.env.FRONTEND_URL}/olvide-contraseña/${token}'>Reestablecer contraseña</a>
            </p>
            <p>Si no solicitaste este Email, puedes ignorar el mensaje</p>            
        `
    })
}
