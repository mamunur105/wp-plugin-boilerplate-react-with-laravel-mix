import React, { ReactNode } from 'react';

interface FieldWrapperProps {
	children: ReactNode; // Any valid React child (e.g., JSX, string, etc.)
	label?: string; // Optional string for the label
	desc?: string; // Optional string for the description
	type?: string; // Optional string for additional class names
	wrapperClass?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
	children,
	label,
	desc,
	type,
	wrapperClass,
}) => {
	return (
		<div
			className={`field-wrapper flex justify-between text-left mb-3 ${type || ''} ${wrapperClass}`}
		>
			<div className="field-label-wrapper w-2/5 mt-3 items-center text-base font-medium">
				{label || 'Label'}
			</div>
			<div className="field-wrapper-child rounded p-4 w-3/5 text-left border border-slate-200">
				{children}
				{desc ? <p className="mt-2">{desc}</p> : null}
			</div>
		</div>
	);
};

export default FieldWrapper;
