import { useEffect, useRef } from "react";

const NestedCheckboxes = ({ data, checked, setChecked }) => {
  const checkboxRefs = useRef({});

  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (n) => {
        if (n.children) {
          n.children.forEach((child) => {
            newState[child.id] = isChecked;
            updateChildren(child);
          });
        }
      };

      updateChildren(node);
      return newState;
    });
  };

  useEffect(() => {
    const updateIndeterminate = (node) => {
      if (!node.children || node.children.length === 0) return;

      node.children.forEach(updateIndeterminate);

      const allChecked = node.children.every((child) => checked[child.id]);
      const noneChecked = node.children.every((child) => !checked[child.id]);
      const isIndeterminate = !allChecked && !noneChecked;

      const ref = checkboxRefs.current[node.id];
      if (ref) {
        ref.indeterminate = isIndeterminate;
      }
    };

    data.forEach(updateIndeterminate);
  }, [checked, data]);

  return (
    <div className="ml-4 space-y-2 mt-2">
      {data.map((node) => (
        <div key={node.id} className="flex flex-col">
          <label className="inline-flex items-center space-x-2">
            <input
              ref={(el) => (checkboxRefs.current[node.id] = el)}
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
              className="form-checkbox text-blue-600"
            />
            <span>{node.name}</span>
          </label>
          {node.children && node.children.length > 0 && (
            <NestedCheckboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedCheckboxes;
