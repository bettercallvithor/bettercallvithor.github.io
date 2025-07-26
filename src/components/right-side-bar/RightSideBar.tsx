import useIsMobile from '../../hooks/useIsMobile';
import type { SocialLinkProps } from './interfaces/socialLinkProps';
import './right-side-bar.css';

function RightSideBar() {
  const isMobile = useIsMobile();
  const socialLinks: SocialLinkProps[] = [
    {
      platform: "GitHub",
      url: "https://github.com/bettercallvithor",
      iconPath: "assets/github.svg",
      username: "bettercallvithor"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/vithor-tinti/",
      iconPath: "assets/linkedin.svg",
      username: "vithor-tinti"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/_vithort/",
      iconPath: "assets/instagram.svg",
      username: "_vithort"
    }
  ];

  return (
    <div className="right-side-bar">
      <div id="img-name-presentation">
        <img src={`assets/20220111_124523.jpg`} alt="Vithor profile picture" className="profile-picture" />
        {!isMobile && <p>Vithor Tinti</p>}
      </div>

      <div className="social-links">
        {socialLinks.map(x => {
          return (
            <a key={x.platform} href={x.url} target='_blank'>
              <img src={x.iconPath} alt={x.platform} className="social-icon" />
              <span>@{x.username}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default RightSideBar;
