import './index.css'

const Home = () => (
  <div className='mb-32'>
    <div className='mt-14'>
      <section className='col-span-12 grid grid-cols-12 gap-2 shadow-xl rounded-xl bg-white lg:order-1 mb-3'>
        <div className='col-span-12 sm:order-2 lg:col-span-7 p-4 flex flex-col justify-center order-1 items-start gap-2'>
          <h2 className='text-blue-700 font-bold text-xl lg:text-2xl'>Ragas and Talas</h2>
          <p className='text-left'><strong className='text-blue-500'>Ragas:</strong> These are the cornerstone of Carnatic music, representing melodic structures with distinct ascending and descending patterns. Each raga evokes specific emotions and moods, often associated with particular times of the day or seasons.
          </p>
          <p className='text-left'>
            <strong className='text-blue-500'>Talas:</strong> The rhythmic aspect of Carnatic music is governed by talas, intricate rhythmic cycles that underpin compositions. Talas provide a framework for intricate rhythmic improvisations and compositions.
          </p>
        </div>

        <div className='col-span-12 sm:order-1 lg:col-span-5 p-4 flex flex-row justify-center gap-2 lg:order-2'>
          <img src="./images/Ragas&talas1.jpg" alt="ragas-1" className='w-1/2'/>
          <img src="./images/Ragas&talas2.jpg" alt="ragas-2" className='w-1/2'/>
        </div>
      </section>
      <section className='col-span-12 grid grid-cols-12 gap-2 shadow-xl rounded-xl bg-white mb-3'>
        <div className='col-span-12 sm:order-2 lg:col-span-7 p-4 flex flex-col justify-center items-start gap-2 order-2'>
          <h2 className='text-blue-700 font-bold text-xl lg:text-2xl'>Musical structure</h2>
          <p className='text-left'>
            <strong className='text-blue-500'>Kritis and Varnams: </strong> Carnatic music compositions come in various forms, including kritis (devotional songs) and varnams (complex compositions with intricate melodic and rhythmic patterns).
          </p>
          <p className='text-left'>
            <strong className='text-blue-500'>Alapanas and Neraval: </strong>Performances often involve alapanas (elaborate improvisations exploring the nuances of a raga) and neraval (repetition and elaboration of a specific line within a composition).
          </p>
        </div>

        <div className='col-span-12 sm:order-1 lg:col-span-5 p-4 flex flex-row justify-center lg:order-1 gap-2'>
          <img src="./images/Musical structure1.jpg" alt="ragas-1" className='w-2/4'/>
          <img src="./images/Musical structure2.jpg" alt="ragas-2" className='w-2/4'/>
        </div>
      </section>
      <section className='col-span-12 grid grid-cols-12 gap-2 shadow-xl rounded-xl bg-white mb-3'>
        <div className='col-span-12 sm:order-2 lg:col-span-7 p-4 flex flex-col justify-center items-start order-1 gap-2'>
          <h2 className='text-blue-700 font-bold text-xl lg:text-2xl'>Instruments</h2>
          <p className='text-left'>
            <strong className='text-blue-500'>Vocal: </strong> Vocal music holds a paramount position in Carnatic music, with artists exhibiting intricate control over pitch, tone, and expression.
          </p>
          <p className='text-left'>
            <strong className='text-blue-500'>Instrumental: </strong>Instruments like the veena, violin, flute, mridangam (percussion), ghatam, and kanjira complement vocal renditions, showcasing technical virtuosity and melodic prowess.
          </p>
        </div>

        <div className='col-span-12 sm:order-1 lg:col-span-5 p-4 flex flex-row justify-center gap-2 lg:order-2'>
          <img src="./images/Musical instruments1.jpg" alt="ragas-1" className='w-2/4'/>
          <img src="./images/Musical instruments2.jpg" alt="ragas-2" className='w-2/4'/>
        </div>
      </section>
      <section className='col-span-12 grid grid-cols-12 gap-2 shadow-xl rounded-xl bg-white mb-3'>
        <div className='col-span-12 sm:order-2 lg:col-span-7 p-4 flex flex-col justify-center items-start gap-2 order-2'>
          <h2 className='text-blue-700 font-bold text-xl lg:text-2xl'>Pedagogy and Tradition</h2>
          <p className='text-left'>
            <strong className='text-blue-500'>Guru-Shishya Parampara: </strong>Carnatic music is traditionally passed down through an oral tradition, emphasizing the guru-shishya relationship, where knowledge is imparted from teacher to student.
          </p>
          <p className='text-left'>
            <strong className='text-blue-500'>Concerts and Festivals: </strong>Performances take place in various settings, from intimate gatherings to grand concerts. Festivals like Tyagaraja Aradhana and Margazhi season in Chennai celebrate Carnatic music through concerts, lec-dems, and workshops.
          </p>
        </div>

        <div className='col-span-12 sm:order-1 lg:col-span-5 p-4 flex flex-row justify-center lg:order-1 gap-2'>
          <img src="./images/Pedayogi and tradition1.jpg" alt="ragas-1" className='w-2/4'/>
          <img src="./images/Pedayogi and tradition2.jpg" alt="ragas-2" className='w-2/4'/>
        </div>
      </section>
    </div>

  </div>
)


export default Home