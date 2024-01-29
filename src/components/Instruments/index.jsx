const Instruments = () => (
  <div className="mt-16 mb-20">
    <p className="text-lg font-medium text-gray-800 mb-10">
      In Carnatic music, a rich tapestry of instruments weaves together to create a vibrant and soulful symphony. Each instrument plays a unique role in embellishing the melodic and rhythmic aspects of this classical tradition.
    </p>
    <section className="col-span-12 grid grid-cols-12 gap-2 bg-white shadow-xl rounded-xl p-4 mb-4">
      <div className="col-span-12 lg:col-span-7 flex justify-center flex-col items-start sm:order-2 order-1">
        <h2 className="text-blue-700 text-2xl font-bold">Veena</h2>
        <p className='text-start gap-2'>
          The veena is a traditional Indian stringed instrument that holds a significant place in classical music. It's an ancient instrument, dating back to around 1500 BCE, and comes in various forms, the most prominent being the Saraswati veena and the Rudra veena. Typically made from wood, it has a long, hollow body with a resonator at the bottom and a neck with strings running across the entire length. The main melody strings are played with one hand while the other hand manipulates additional strings to produce different notes and embellishments. The veena's rich, resonant sound and its ability to evoke emotions make it a cherished instrument in Indian classical music.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-row justify-center items-center gap-2 sm:order-1 lg:order-2">
        <img src='./images/Veena1.jpg' alt="veena1" className="w-3/2 h-1/2"/>
        <img src='./images/veena2.jpg' alt="veena2" className="w-1/2 h-1/2"/>
      </div>
    </section>
    <section className="col-span-12 grid grid-cols-12 gap-2 bg-white shadow-xl rounded-xl p-4 mb-4">
      <div className="col-span-12 lg:col-span-7 flex justify-center flex-col items-start sm:order-2 order-2">
        <h2 className="text-blue-700 text-2xl font-bold">Violin</h2>
        <p className='text-start gap-2'>
          The violin is a prominent and versatile string instrument with a history dating back several centuries. It features four strings stretched over a hollow, wooden body, typically made from maple and spruce. Musicians use a bow, usually made of horsehair, to create sound by stroking or "bowing" the strings. Alternatively, they can pluck the strings with their fingers, a technique known as "pizzicato." The violin's range and expressive capabilities have made it a cornerstone in various music genres, including classical, folk, jazz, and contemporary styles. Its ability to convey a wide range of emotions, from melancholy to exuberance, contributes to its enduring popularity. Mastering the violin requires intricate finger placement on the fingerboard to produce different pitches, as well as an understanding of bowing techniques to control dynamics and articulation. Its sound can be both sweet and powerful, making it a central instrument in orchestras, chamber ensembles, and as a solo instrument.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 p-4 flex flex-row justify-center gap-2 sm:order-1 lg:order-1">
        <img src='./images/violin1.jpg' alt="violin1" className="w-1/2"/>
        <img src='./images/violin2.jpg' alt="violin2" className="w-1/2"/>
      </div>
    </section>
    <section className="col-span-12 grid grid-cols-12 gap-2 bg-white shadow-xl rounded-xl p-4 mb-4">
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-start sm:order-2 order-1">
        <h2 className="text-blue-700 text-2xl font-bold">Veena</h2>
        <p className='text-start'>
          The flute, a captivating wind instrument, enchants listeners with its pure and resonant tone. Crafted from metal, wood, or plastic, its sleek design houses a series of finger holes and a mouthpiece where musicians breathe life into its melodies. With agility and grace, flutists navigate its extensive range, from delicate whispers to soaring heights. Whether as a soloist or nestled within ensembles spanning classical to contemporary genres, the flute's versatility knows no bounds. Its expressive qualities, enriched by techniques like vibrato and trills, evoke a spectrum of emotions, captivating audiences worldwide. Mastering this instrument demands not only technical prowess but also a deep connection to its soulful sound, making the flute an enduring symbol of musical beauty and grace.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-row justify-center items-center gap-2 sm:order-1 lg:order-2">
        <img src='./images/Flute1.jpg' alt="Flute1" className="w-1/2 "/>
        <img src='./images/Flute2.jpg' alt="Flute2" className="w-1/2 "/>
      </div>
    </section>
    <section className="col-span-12 grid grid-cols-12 gap-2 bg-white shadow-xl rounded-xl p-4 mb-4">
      <div className="col-span-12 lg:col-span-7 flex justify-center flex-col items-start sm:order-2 order-2">
        <h2 className="text-blue-700 text-2xl font-bold">Mridingam</h2>
        <p className='text-start gap-2'>
          The mridangam is a percussion instrument originating from South India, highly regarded for its rich tones and rhythmic complexity. It's a double-headed drum made primarily from wood and has a distinctive shape with a narrow waist in the middle. The two heads are made of layered skin—traditionally from the skin of the goat—stretched over the drum's hollowed-out body. What sets the mridangam apart is its versatility in producing a wide range of tones. One side of the drum, the smaller head known as the "valanthalai," produces a higher pitch, while the larger head, the "bass head" or "thoppi," generates deeper tones. Skilled players use their fingers, palms, and sometimes even elbows to strike the different parts of the drumhead, creating intricate rhythms and melodies. In Indian classical music, particularly in the Carnatic tradition, the mridangam serves as an essential accompaniment to vocalists, instrumentalists, and dancers. Its ability to complement and enhance the rhythmic structure of performances makes it a vital component in concerts and recitals. Learning to play the mridangam involves rigorous training to master its varied strokes, intricate patterns, and the subtleties of rhythm, earning it a revered status among percussion instruments in Indian classical music.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 p-4 flex flex-row justify-center items-center  gap-2 sm:order-1 lg:order-1">
        <img src='./images/Mridingam1.jpg' alt="Mridingam1" className="w-1/2 h-1/2"/>
        <img src='./images/Mridingam2.jpg' alt="Mridingam2" className="w-1/2 h-1/2"/>
      </div>
    </section>

  </div>
)

export default Instruments