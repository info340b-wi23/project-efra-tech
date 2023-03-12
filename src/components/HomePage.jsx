import React from 'react';
import ProfileSelect from './ProfileSelect';

export default function HomePage(props){
  return(
    <main>
      <div className='container-head home-banner'>
        <h1>This is OurFamily</h1>
        <h3>Well, technically <i>your</i> family.</h3>
      </div>
      <h2 className='mt-5'>Who's Here?</h2>
      <div className='container-main d-flex'>
        {/* <ProfileSelect /> */}
        <div className='border border-primary'>
          User 1
        </div>
        <div className='border border-primary'>
          User 2
        </div>
      </div>
    </main>
  );
}