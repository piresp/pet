import { selectIsMenuActive, toggleMenu } from "@/redux/slices/menu";
import { ArrowUturnLeftIcon, Bars3Icon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { HeaderProps } from "./types";

const gridTemplateForLayout = {
  'one-center': { grid: 'grid-cols-1', areas: '"center"' },
  'one-left': { grid: 'grid-cols-1', areas: '"left"' },
  'one-right': { grid: 'grid-cols-1', areas: '"right"' },
  'two-middle-right': { grid: 'grid-cols-3', areas: '". middle right"' },
  'two-left-middle': { grid: 'grid-cols-3', areas: '"left middle ."' },
  'two-left-right': { grid: 'grid-cols-2', areas: '"left right"' },
  'three-between': { grid: 'grid-cols-3', areas: '"left middle right"' },
};

const childGridArea = {
  'one-center': ['center'],
  'one-left': ['left'],
  'one-right': ['right'],
  'two-middle-right': ['middle', 'right'],
  'two-left-middle': ['left', 'middle'],
  'two-left-right': ['left', 'right'],
  'three-between': ['left', 'middle', 'right'],
};

const Home = () => {
  return (
    <div className="rounded-full px-5 py-5 bg-theme-green flex justify-center items-center hover:opacity-90 cursor-pointer" onClick={() => { }}>
      <HomeIcon className="w-6 h-6" />
    </div>
  )
}

const ArrowBack = () => {
  return (
    <div className="rounded-full px-5 py-5 flex justify-center align-middle hover:opacity-90 cursor-pointer" onClick={() => { }}>
      <ArrowUturnLeftIcon className="w-6 h-6 text-theme-gray" />
    </div>
  )
}

const Menu = () => {
  const dispatch = useDispatch()

  return (
    <div className="rounded-full px-5 py-5 flex justify-center align-middle hover:opacity-90 cursor-pointer" onClick={() => dispatch(toggleMenu())}>
      <Bars3Icon className="w-6 h-6 text-theme-gray" />
    </div>
  )
}

const NavBase: React.FC<HeaderProps> = ({ childrenLayout, modal, children, ...rest }) => {
  const layoutStyles = {
    gridTemplateAreas: gridTemplateForLayout[childrenLayout].areas
  };

  const processedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child as React.ReactElement, {
      style: { gridArea: childGridArea[childrenLayout][index] }
    })
  );

  return (
    <div
      style={layoutStyles}
      className={`bg-theme-dark grid items-center ${gridTemplateForLayout[childrenLayout].grid} w-full px-5 py-3 mt-auto rounded-t-2xl fixed bottom-0`}
      {...rest}>
      {processedChildren}
    </div>
  );
}

const Nav = () => {
  const isMenuActive = useSelector(selectIsMenuActive)

  if (isMenuActive) return null

  return (
    <NavBase childrenLayout="three-between">
      <Menu />
      <Home />
      <ArrowBack />
    </NavBase>
  )
}

export default Nav
