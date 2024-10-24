import { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactImg } from '../../assets';
import './contact.css';

const requiredMessage = 'This field is required';
const ContactSchema = Yup.object({
  name: Yup.string().optional(),
  email: Yup.string().required(requiredMessage),
  message: Yup.string().required(requiredMessage),
});

type ContactSchemaModel = Yup.InferType<typeof ContactSchema>;

type Status = {
  message?: string;
  success?: boolean;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { isValid },
  } = useForm<ContactSchemaModel>({
    resolver: yupResolver(ContactSchema),
    mode: 'onChange',
  });

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<Status>({});

  const submit = useCallback(async () => {
    await trigger();
    if (isValid) {
      handleSubmit((formData: ContactSchemaModel) => {
        console.log('data', formData);
      });
    }
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <Image src={ContactImg} alt="Contact Image" />
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={submit}>
              <Row>
                <Col size={12} md={6} className="px-1">
                  <input placeholder="Name" type="text" {...register('name')} />
                </Col>
                <Col size={12} md={6} className="px-1">
                  <input
                    placeholder="Phone"
                    type="tel"
                    {...register('email')}
                  />
                </Col>
                <Col size={12} md={6} className="px-1">
                  <input
                    placeholder="Email"
                    type="email"
                    {...register('email')}
                  />
                </Col>

                <Col size={12} className="px-1">
                  <textarea rows={6} placeholder="Message" {...register('message')} />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col>
            {status.message && status.success && (
              <p className="success">{status.message}</p>
            )}
            {status.message && !!status.success && (
              <p className="danger">{status.message}</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
