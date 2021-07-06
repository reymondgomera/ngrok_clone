import slackLogo from '../icons/slack-logo.svg';
import githubLogo from '../icons/github-logo.svg';
import sendgridLogo from '../icons/sendgrid-logo.svg';
import twilioLogo from '../icons/twilio-logo.svg';
import atlassianLogo from '../icons/atlassian-logo.svg';
import './IconsServices.css';

const IconsServices = () => {
   return (
      <div className='iconServices container mt-5'>
         <div className='d-flex flex-wrap justify-content-center'>
            <img className='iconServices__icons m-3 m-lg-4 img-fluid' src={slackLogo} alt='slack' />
            <img className='iconServices__icons m-3 m-lg-4 img-fluid' src={githubLogo} alt='github' />
            <img className='iconServices__icons m-3 m-lg-4 img-fluid' src={sendgridLogo} alt='sendgrid' />
            <img className='iconServices__icons m-3 m-lg-4 img-fluid' src={twilioLogo} alt='twilio' />
            <img className='iconServices__icons m-3 m-lg-4 img-fluid' src={atlassianLogo} alt='atlassian' />
         </div>
         <p className='text-center mt-2'>
            As well as <span className='text--highlighted'>Amazon Web Services</span> and many more.
         </p>
      </div>
   );
};

export default IconsServices;
