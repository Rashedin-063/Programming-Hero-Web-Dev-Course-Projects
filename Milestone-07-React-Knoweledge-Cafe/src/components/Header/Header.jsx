import Profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='container mx-auto  my-8 pb-4 flex justify-between items-center border-b-2 px-4 md:px-12 lg:px-24'>
      <h1 className='text-3xl md:text-4xl font-bold'>React Knowledge Cafe</h1>
      <img src={Profile} alt='Profile-pic' />
    </header>
  );
};

export default Header;
