import { ComponentContainer, Sidebar } from "../documentation";
import { IconBadge, StatusBadge } from "../components";
import { MdNotifications, MdEmail, MdShoppingCart } from "../utils/icons";
import { SectionHeader } from "../documentation";

export const BadgeDoc = () => {
  document.title = "Badge | WebWidgets";
  const iconBadgeCodeString = `<IconBadge count={5} iconSize={48}>
     <MdNotifications />
</IconBadge>
<IconBadge count={"7+"} iconSize={48}>
    <MdEmail />
</IconBadge>
<IconBadge count={10} iconSize={48}>
    <MdShoppingCart />
</IconBadge>`;

  const statusBadgeCodeString = `<StatusBadge 
      status="online"
      srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
      altText="Sarah Wilson"
      dimension="75px"
/>
<StatusBadge
      status="offline"
      srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
      altText="Sarah Wilson"
      dimension="75px"
/>
<StatusBadge
      status="dnd"
      srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
      altText="Sarah Wilson"
      dimension="75px"
/>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Badge Component"
          description="Badges are used to denote a small piece of information."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Icon Badge"
          description="Icon badges can be used to denote the numeric value of an entity. For example, they can be used to display the number of missed calls or the number of notifications. The badges can appear of the top-right corner of the icon."
          codeString={iconBadgeCodeString}
        >
          <IconBadge count={5} iconSize={48}>
            <MdNotifications />
          </IconBadge>
          <IconBadge count={"7+"} iconSize={48}>
            <MdEmail />
          </IconBadge>
          <IconBadge count={10} iconSize={48}>
            <MdShoppingCart />
          </IconBadge>
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Status Badge"
          description="Status badges can be used to denote the status of a user. For example, it can show if the user is online, offline or in DND mode."
          codeString={statusBadgeCodeString}
        >
          <StatusBadge
            status="online"
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
            altText="Sarah Wilson"
            dimension="75px"
          />
          <StatusBadge
            status="offline"
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
            altText="Sarah Wilson"
            dimension="75px"
          />
          <StatusBadge
            status="dnd"
            srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
            altText="Sarah Wilson"
            dimension="75px"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
