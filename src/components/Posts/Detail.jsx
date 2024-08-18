import React from 'react';
import check from '../../assets/images/check.png';
import goo1 from '../../assets/images/goorum1.jpg';
import goo2 from '../../assets/images/goorum2.jpg';
import goo3 from '../../assets/images/goorum3.jpg';
import goo4 from '../../assets/images/goorum4.jpg';
import selfie from '../../assets/images/selfie.jpg';

const Detail = ({post}) => {
  const content = post['content'];
  if(post['id'] === 1) {
    return (
      <div className="bg-gray-100 p-5 rounded-md mt-2 mb-4">
        <div className="flex items-center">
          <div className="mr-10">
            <h3 className="text-2xl font-semibold ml-2 mb-2">Who am I?</h3>
            <p className="ml-2">{content['Who am I?']}</p>
          </div>
          <img src={selfie} alt="Selfie" className="w-[100px] h-[100px] mr-5 mt-2 rounded-full" />
        </div>
        
        <div className="mt-6">
          <h3 className="text-2xl font-semibold ml-2 mb-2">Skills & Abilities?</h3>
          {content['Skills & Abilities?'].map((skill) => (
            <p key={skill} className="ml-2">{skill}</p>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold ml-2 mb-2">My Interest?</h3>
          {content['My Interest?'].map((interest) => (
            <p key={interest} className="ml-2">{interest}</p>
          ))}
        </div>
      </div>
    );
  } else if(post['id'] === 2) {
    return (
      <div className="bg-gray-100 p-5 rounded-md mt-2 mb-4">
        {content.activities.map((activity) => {
          return (
            <div key={activity.name} className="mb-4">
              <div className="flex items-center mb-2">
                <img src={check} alt="Check" className="w-3 h-3 mr-5" />
                <h3 className="text-xl font-semibold">{activity.name}</h3>
              </div>
              {activity.details && (
                <ul className="list-disc list-inside">
                  {activity.details.map((detail) => (
                    <li key={detail} className="ml-8">{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="bg-gray-100 p-5 rounded-md mt-2 mb-4">
        <h3 className="text-2xl font-semibold pl-2 mb-5">구름이 (1세)</h3>
        <ul className="list-disc list-inside">
          {content['goorum'].map((item) => (
            <li key={item} className="ml-4">{item}</li>
          ))}
        </ul>
        <div className="flex justify-around mt-5">
          <img src={goo1} alt="구름이1" className="w-[20%] h-[20%] rounded-lg" />
          <img src={goo2} alt="구름이2" className="w-[20%] h-[20%] rounded-lg" />
          <img src={goo3} alt="구름이3" className="w-[20%] h-[20%] rounded-lg" />
          <img src={goo4} alt="구름이4" className="w-[20%] h-[20%] rounded-lg" />
        </div>
      </div>
    );
  }

};

export default Detail;
