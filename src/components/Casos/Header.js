import header_img from 'assets/img/header_img.png'

export default function Header(){
    return(
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12 max-w-full sm:pt-36 sm:pb-40 xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
                  Cases Studies
                </h1>
                <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div> 
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-sm lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                <img alt='' src={header_img} className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}