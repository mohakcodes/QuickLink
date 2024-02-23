import EmailTemp from '@/app/_components/EmailTemp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const res = await req.json();
  console.log("ress",res);
  try {
    const data = await resend.emails.send({
        from: 'Acme <QuickLink@resend.dev>',
        to: ['mohak46812@gmail.com'],
        subject: `${res?.userName } - shared a file`,
        react: <EmailTemp res={res} />,
    });

    console.log("this is data",data);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
