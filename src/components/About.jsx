import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className='h-screen w-full bg-white'>
        <div className='max-w-[80%] md:max-w-[60%] mx-auto flex flex-col px-8 py-24 h-full justify-start'>
            <h3 className='text-black text-center text-4xl'> About </h3>
            <p className='text-xl pt-4'>Urban sounds have shown to be vital in many studies in relation to the livability of a city. Urban sound classification can help people with hearing disabilities, set alarms off in case of emergency, and can help architects plan buildings that increase general wellness.</p>
            <p className='text-xl pt-4'>This machine learning model classifies an uploaded mp3 file into one of ten classes: </p>
            <p className='text-xl py-2 font-mono'>Air Conditioner, Car Horn, Children Playing, Dog Bark, Drilling, Engine Idling, Gun Shot, Jackhammer, Siren, Street Music.</p>
            <p className='text-xl py-2'> The model is trained on the <a className='text-blue-700 cursor-pointer' href='https://urbansounddataset.weebly.com/urbansound8k.html'>UrbanSound8k</a> dataset, with  the <b>Keras/Tensorflow</b> libraries being used to train the model.</p>
            <p className='text-xl py-2'> Uploaded files are sent to a <b>Flask API</b> that processes the sound file using <b>Librosa</b> to extract features, which are then passed through the model to predict the class.</p>
            <p className='text-xl py-2'>For more information on the model, view the detailed report of the classification abilities on this <a className='text-blue-700 cursor-pointer' href='https://windrianto3.github.io/ml-final-report/'>Github page</a>.</p>
        </div>
        
    </div>
  )
}

export default About