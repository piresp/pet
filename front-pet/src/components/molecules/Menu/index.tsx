import Text from '@/components/atoms/Text';
import { selectIsMenuActive, toggleMenu } from '@/redux/slices/menu';
import { UserIcon, XMarkIcon, UserGroupIcon, CalendarDaysIcon, HeartIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useSelector } from 'react-redux';
import Chick from '../../../../public/assets/animals/chick.svg';
import { useDispatch } from 'react-redux';

const CloseModal = () => {
  const dispatch = useDispatch()
  return (
    <div className='self-end mb-10 pt-5 pr-5 cursor-pointer' onClick={() => dispatch(toggleMenu())}>
      <XMarkIcon className='w-7 h-7' />
    </div>
  )
}

const Photo = ({ photo }: { photo?: React.ReactElement }) => {
  return (
    <div className='w-32 h-32 rounded-3xl border-2 border-dashed border-theme-dark flex justify-center items-center'>
      <div className="w-24 h-24 rounded-3xl bg-gray-100 flex justify-center items-center">
        {photo ? photo : <Chick />}
      </div>
    </div>
  );
};

const Name = ({ name }: { name: string }) => {
  return (
    <Text variant='title' className='text-2xl'>{name}</Text>
  );
};

const PhotoAndName = ({ name, photo }: { name: string, photo?: React.ReactElement }) => {
  return (
    <div className='grid gap-6'>
      <Photo photo={photo} />
      <Name name={name} />
    </div>
  );
};

const IconAndText = ({ img, text, onClick }: { text: string, img: React.ReactNode, onClick: () => void }) => {
  return (
    <div className='flex justify-start items-center hover:opacity-80 cursor-pointer w-1/2' onClick={onClick}>
      {img}<Text className='text-theme-gray text-lg font-normal ml-2'>{text}</Text>
    </div>
  )
}

const MenuBase = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-full h-screen bg-gradient-linear pl-6 justify-center'>
      {children}
    </div>
  )
}

const Menu = ({ name, photo }: { name: string, photo?: React.ReactElement }) => {
  const isMenuActive = useSelector(selectIsMenuActive)

  if (!isMenuActive) return null

  return (
    <MenuBase>
      <CloseModal />
      <PhotoAndName name={name} photo={photo} />
      <div className='grid gap-8 mb-auto mt-auto'>
        <IconAndText img={<UserIcon className='w-6 h-6 text-theme-gray' />} text='Clientes' onClick={() => { }} />
        <IconAndText img={<HeartIcon className='w-6 h-6 text-theme-gray' />} text='Pets' onClick={() => { }} />
        <IconAndText img={<CalendarDaysIcon className='w-6 h-6 text-theme-gray' />} text='Agenda' onClick={() => { }} />
        <IconAndText img={<UserGroupIcon className='w-6 h-6 text-theme-gray' />} text='Funcionários' onClick={() => { }} />
        <IconAndText img={<BanknotesIcon className='w-6 h-6 text-theme-gray' />} text='Finanças' onClick={() => { }} />
      </div>
    </MenuBase>
  );
};

export default Menu;