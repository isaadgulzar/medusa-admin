import React, { useCallback } from "react"
import Collapsible from "react-collapsible"
import { NavLink } from "react-router-dom"

type SidebarMenuSubitemProps = {
  pageLink: string
  text: string
}

type SidebarMenuItemProps = {
  pageLink: string
  text: string
  icon: JSX.Element
  triggerHandler: () => any
  subItems?: SidebarMenuSubitemProps[]
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> & {
  SubItem: (props: SidebarMenuSubitemProps) => JSX.Element
} = ({
  pageLink,
  icon,
  text,
  triggerHandler,
  subItems = [],
}: SidebarMenuItemProps) => {
  const styles =
    "group py-1.5 my-0.5 flex text-white hover:bg-hex-44 items-center px-5 text-sm"
  const activeStyles = "bg-hex-44 is-active"
  const classNameFn = useCallback(
    ({ isActive }) => (isActive ? `${styles} ${activeStyles}` : styles),
    []
  )

  return (
    <Collapsible
      transitionTime={150}
      transitionCloseTime={150}
      {...triggerHandler()}
      trigger={
        <NavLink className={classNameFn} to={pageLink}>
          <span className="items-start">{icon}</span>
          <span className="ml-3 group-[.is-active]:text-white">{text}</span>
        </NavLink>
      }
    >
      {subItems?.length > 0 &&
        subItems.map(({ pageLink, text }) => (
          <SubItem pageLink={pageLink} text={text} />
        ))}
    </Collapsible>
  )
}

const SubItem = ({ pageLink, text }: SidebarMenuSubitemProps) => {
  const styles = "py-2 px-10 flex hover:bg-hex-44"
  const activeStyles = "bg-hex-44 font-semibold"
  const classNameFn = useCallback(
    ({ isActive }) => (isActive ? `${styles} ${activeStyles}` : styles),
    []
  )

  return (
    <NavLink className={classNameFn} to={pageLink}>
      <span className="ml-3 text-white text-sm">{text}</span>
    </NavLink>
  )
}

SidebarMenuItem.SubItem = SubItem

export default SidebarMenuItem
