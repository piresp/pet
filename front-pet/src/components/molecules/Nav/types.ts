
type OneChildrenLayout = 'one-center' | 'one-left' | 'one-right'
type TwoChildrenLayout = 'two-middle-right' | 'two-left-middle' | 'two-left-right'
type ThreeChildrenLayout = 'three-between'

type OneJSXChildren = JSX.Element
type TwoJSXChildren = [JSX.Element, JSX.Element]
type ThreeJSXChildren = [JSX.Element, JSX.Element, JSX.Element]

export type UnionChildrenLayout = OneChildrenLayout | TwoChildrenLayout | ThreeChildrenLayout
type UnionJSXChildren = OneJSXChildren | TwoJSXChildren | ThreeJSXChildren

interface GenericRootProps<Layout extends UnionChildrenLayout, Children extends UnionJSXChildren> {
  childrenLayout: Layout,
  children: Children,
  modal?: true
}

type RootOneChildren = GenericRootProps<OneChildrenLayout, OneJSXChildren>
type RootTwoChildren = GenericRootProps<TwoChildrenLayout, TwoJSXChildren>
type RootThreeChildren = GenericRootProps<ThreeChildrenLayout, ThreeJSXChildren>

export type HeaderProps = RootOneChildren | RootTwoChildren | RootThreeChildren
