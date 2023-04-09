import { useState } from 'react';

const useAppContainer = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false);
  const openSidebar = () => setVisibleSidebar(true);
  const closeSidebar = () => setVisibleSidebar(false);
  return {
    visibleSidebar,
    openSidebar,
    closeSidebar,
  };
};

export default useAppContainer;
