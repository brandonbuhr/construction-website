import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  email,
  message,
}) => (
  <div>
    <h3>{name} sent you a message!</h3>
    <h3>Phone Number: {phone} </h3>
    <h3>Email: {email}</h3>
    <p>Message: {message}</p>
  </div>
);
