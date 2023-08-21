import React, {useState} from 'react'
import { json } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player'

const Classify = () => {

    const [ufile, setFile] = useState();
    const [results, setResults] = useState(null)
    const [soundurl, setsoundurl] = useState(null)

    async function handleUpload(e) {
        e.preventDefault();
        renderAudioPlayer()
        const fdata = new FormData();
        fdata.append('file', ufile)
        await fetch('/uploader', {'method': 'POST', 'body': fdata})
        .then((response) => response.json())
        .then(jsondat => {setResults(jsondat)})
        .catch((e) => {console.log("Please check that your file is valid.")}) 

        // Test api
        /*await fetch('/live', {'method': 'GET'})
        .then((response) => response.json())
        .then(jsondat => {console.log(jsondat) })*/
    }

    function displayResults() {
        const preds = results.predictions['Air Conditioner']
        const keys = Object.keys(results.predictions)
        const predictedclass = results.predicted_class
        const imgurl = results.img_url
        {  /*              <div className = 'sm:w-2/5 w-full rounded-md flex-col flex bg-gray-500'>
        <h3 className='text-xl'> {keys.map(key => {return <div><h3>{key}: {results.predictions[key]} %</h3></div>})}</h3>
    </div>*/}
        
        return <div className='w-full'>
            <div>
                <h3 className='text-4xl font-bold text-center'>Prediction Results</h3>
            </div>

            <div className='w-full px-10 py-8 flex flex-col justify-center align-middle text-center'>
                <div className='text-xl'>
                    <h3>Your result is <b>{predictedclass}</b>!</h3>
                </div>
                <img className='bg-white pt-4 rounded-md object-cover' src={imgurl}></img>
            </div>
        </div>
    }

    function renderAudioPlayer() { 
        console.log(ufile)
        setsoundurl(URL.createObjectURL(ufile))
    }

  return (
    <div className='h-screen w-[80%] mx-auto bg-white'>
        <div className='px-4 max-w-[1000px] mx-auto flex flex-col py-24 h-full align-middle'>
            <h3 className='text-4xl font-bold border-spacing-y-9 text-center'>Classify</h3>
            <p className='text-center text-xl pt-6'>Classify a <b>MP3</b> or <b>WAV</b> urban sound by submitting it below!</p>
            <form  className='items-center justify-center flex py-4 flex-col'>
                <input type='file' onChange={(e) => {setFile(e.target.files[0]);}}  className="items-center align-middle justify-center
        file:bg-violet-50 file:text-blackhover:file:bg-violet-100
file:rounded-lg file:rounded-tr-none file:rounded-br-none
file:px-4 file:py-2 file:mr-4 file:border-none
hover:cursor-pointer border rounded-lg text-black" accept=".mp3,.wav"></input>
                <button type='submit' onClick={(e) => handleUpload(e)} 
                    className='rounded-lg text-black border-2 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center' disabled={!ufile}>
                      Predict! 
                </button>
            </form>
            <div className='flex pb-4 justify-center z-0'>
                {soundurl ?  <audio controls autoPlay src={soundurl}> </audio> : null}
            </div>
            {results ? displayResults() : null}
        </div>
    </div>
  )
}

export default Classify