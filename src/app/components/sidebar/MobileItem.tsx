"use client";

import React from "react";

interface MobileItemProps {
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon,
  active,
  onClick
}) => {
  return <div>MobileItem</div>;
};

export default MobileItem;
