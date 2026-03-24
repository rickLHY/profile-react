import './Contact.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.desc')}</p>
      <p style={{ marginTop: '12px' }}>
        Email: <a href="mailto:lhy.mg13@nycu.edu.tw">lhy.mg13@nycu.edu.tw</a>
      </p>
    </div>
  );
}
