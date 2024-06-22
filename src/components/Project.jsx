
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Project({ projectObject, data }) {

  return (
    <div
      className={`group flex-1 flex relative border-[8px] border-gray-900 basis-[400px] aspect-video pt-14 dark:text-white rounded-md bg-[url(/${projectObject.photo})] ${projectObject.lightBgColor} ${projectObject.darkBgColor}`}
    >
      <div className='absolute left-0 right-0 top-0 bottom-0 opacity-70  hover:opacity-100 group flex items-center justify-center z-1 cursor-pointer' style={{
        backgroundImage: `url(${projectObject.photo})`,
        backgroundSize: 'cover'
      }} onClick={() => window.open(projectObject.linkDemo, '_blank')} />

      <div className="text-white bg-gray-900 flex justify-between items-center pl-4 w-full h-[20%] hover:opacity-100 self-end relative z-20">
        <h3 className='pt-[4px]'>
          {projectObject.title}
        </h3>
        <div className='flex gap-4 text-white text-xl pr-4 h-full pt-[8px]'>
          <a className='h-full px-5 py-2 bg-gray-800 flex items-center' target='_blank' href={projectObject.linkGitHub}><FontAwesomeIcon icon={faGithub} /></a>
          <a className='h-full px-5 py-2 bg-gray-800 flex items-center' target='_blank' href={projectObject.linkDemo}><FontAwesomeIcon icon={faGlobe} /></a>
        </div>
      </div>
    </div>
  );
}