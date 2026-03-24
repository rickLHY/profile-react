import './AboutMe.css';
import profilePic from '../assets/image.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();
  const [preview, setPreview] = useState(false);

  const items = [
    { id: 1, title: t('aboutMe.title'), content: t('aboutMe.content') },
    { id: 2, title: t('aboutMe.skillTitle'), content: t('aboutMe.skillContent') },
  ];

  return (
    <>
      <div id="about-me" className={preview ? 'blurred' : ''}>
        <img
          src={profilePic}
          alt="Profile Picture"
          id="profile-picture"
          onClick={() => setPreview(true)}
        />
        <div id="about-me-text">
          {items.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div id="image-overlay" onClick={() => setPreview(false)}>
          <button id="overlay-close" onClick={() => setPreview(false)}>✕</button>
          <img
            src={profilePic}
            alt="Profile Picture Preview"
            id="preview-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
