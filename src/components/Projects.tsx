import './Projects.css';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Tetris',
      desc: t('projects.tetrisDesc'),
      url:
        import.meta.env.VITE_PROJECT_TETRIS_URL ||
        'https://exotic-rare-specifics-shadows.trycloudflare.com/',
    },
  ];

  return (
    <div id="my-project">
      <h1>{t('projects.title')}</h1>
      {projects.map((p) => (
        <div key={p.id} className="project">
          <h2>
            <a href={p.url} target="_blank" rel="noreferrer">
              {p.title}
            </a>
          </h2>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
