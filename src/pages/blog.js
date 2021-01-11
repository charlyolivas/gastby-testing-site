import React from "react"
// import styles from '../components/blog.module.css'

const blog = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto">
          <div>
            <h1 className="text-primary text-3xl pb-6 px-6 md:px-12">
              This is the blog page
            </h1>
          </div>
          <div className="flex flex-wrap px-6">

            <div className="w-full md:w-1/2 lg:w-1/3   md:px-4 lg:px-6 py-5">
              <div className="bg-white hover:shadow-xl shadow-md">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                    className="h-56 w-full hover:opacity-25"
                  />
                </div>
                <div className="px-4 py-4 md:px-10">
                  <h1 className="font-bold text-lg">Life with Books</h1>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                  <div className="flex flex-wrap pt-8">
                    <div className="w-full md:w-1/3 text-sm font-medium">
                      NOVEMBER 1,2019
                    </div>
                    <div className="2/3">
                      <div className="text-sm font-medium">
                        SHARE:
                        <a href="!#" className="text-blue-700 px-1 ">
                          FACEBOOk
                        </a>
                        <a href="!#" className="text-blue-500 px-1 ">
                          TWITTER
                        </a>
                        <a href="!#" className="text-red-600 px-1 ">
                          GOOGLE+
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3  md:px-4 lg:px-6 py-5">
              <div className="bg-white hover:shadow-xl shadow-md">
                <div className="">
                  <img
                    src="https://media.istockphoto.com/photos/website-designer-creative-planning-application-developer-development-picture-id1206638576"
                    alt=""
                    className="h-56 w-full border-white border-8 hover:opacity-25"
                  />
                </div>
                <div className="px-4 py-4 md:px-10">
                  <h1 className="font-bold text-lg">UI Concepts</h1>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                  <div className="flex flex-wrap pt-8">
                    <div className="w-full md:w-1/3 text-sm font-medium">
                      NOVEMBER 1,2019
                    </div>
                    <div className="md:2/3">
                      <div className="text-sm font-medium">
                        SHARE:
                        <a href="!#" className="text-blue-700 px-1 ">
                          FACEBOOk
                        </a>
                        <a href="!#" className="text-blue-500 px-1 ">
                          TWITTER
                        </a>
                        <a href="!#" className="text-red-600 px-1 ">
                          GOOGLE+
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3  md:px-4 lg:px-6 py-5">
              <div className="bg-white hover:shadow-xl shadow-md">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/3584926/pexels-photo-3584926.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                    className="h-56 w-full border-white border-8 hover:opacity-25"
                  />
                </div>
                <div className="px-4 py-4 md:px-10">
                  <h1 className="font-bold text-lg">UX Concepts</h1>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                  <div className="flex flex-wrap pt-8">
                    <div className="w-full md:w-1/3 text-sm font-medium">
                      NOVEMBER 1,2019
                    </div>
                    <div className="md:2/3">
                      <div className="text-sm font-medium">
                        SHARE:
                        <a href="!#" className="text-blue-700 px-1 ">
                          FACEBOOk
                        </a>
                        <a href="!#" className="text-blue-500 px-1 ">
                          TWITTER
                        </a>
                        <a href="!#" className="text-red-600 px-1 ">
                          GOOGLE+
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default blog
