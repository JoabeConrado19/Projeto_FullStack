import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as Mailgen from 'mailgen';
import { ResetPasswordDto } from 'src/modules/users/dto/resetPassword-user.dto';

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Grupo 16 - M6',
    link: 'http://localhost:3000',
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text }: ResetPasswordDto) {
    await this.mailerService
      .sendMail({
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log('Aqui vai um toast de sucesso, email enviado');
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException(
          'Ops, algo deu errado ao enviar o e-mail',
        );
      });
  }

  resetPassword(userEmail: string, userName: string, resetToken: string) {
    const email = {
      body: {
        name: userName,
        intro:
          'You have received this email because a password reset request for your account was received.',
        action: {
          instructions: 'Click the button below to reset your password:',
          button: {
            color: '#4529e6',
            text: 'Reset your password',
            link: `http://localhost:3000/users/resetPassword/${resetToken}`,
          },
        },
        outro:
          'If you did not request a password reset, no further action is required on your part.',
      },
    };

    const emailBody = mailGenerator.generate(email);
    const emailTemplate = {
      to: userEmail,
      subject: 'Recuperação de senha',
      text: emailBody,
    };

    return emailTemplate;
  }
}
