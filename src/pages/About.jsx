const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-one tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg mx-auto max-w-2xl leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        recusandae laborum perferendis dolorem consequuntur ab natus omnis
        numquam! Quisquam recusandae voluptas provident enim quidem repellendus
        dignissimos beatae temporibus modi fuga, fugit sequi mollitia voluptates
        vitae magnam, cupiditate vero deserunt ipsum?
      </p>
    </>
  );
};

export default About;
