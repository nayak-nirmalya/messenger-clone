"use client";

import React from "react";

interface SelectProps {
  disabled?: boolean;
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>;
}

const Select: React.FC<SelectProps> = ({ label, onChange, options, value }) => {
  return <div>Select</div>;
};

export default Select;
