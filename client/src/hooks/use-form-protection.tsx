import { useEffect } from "react";

export function useFormProtection() {
  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+A (Select All)
      if (e.ctrlKey && e.keyCode === 65) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+C (Copy)
      if (e.ctrlKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+V (Paste)
      if (e.ctrlKey && e.keyCode === 86) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+X (Cut)
      if (e.ctrlKey && e.keyCode === 88) {
        e.preventDefault();
        return false;
      }
      
      // Disable PrintScreen
      if (e.keyCode === 44) {
        e.preventDefault();
        return false;
      }
      
      // Disable Alt+PrintScreen
      if (e.altKey && e.keyCode === 44) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
        return false;
      }
      
      // Disable F5/Ctrl+R (Refresh) to prevent bypassing
      if (e.keyCode === 116 || (e.ctrlKey && e.keyCode === 82)) {
        e.preventDefault();
        return false;
      }
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleDragStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleCopy = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handlePaste = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handlePrint = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable right-click on images specifically
    const handleImageRightClick = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Detect developer tools opening
    const detectDevTools = () => {
      const threshold = 160;
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          console.clear();
          document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-size:24px;color:red;">Acesso negado: Ferramentas de desenvolvedor detectadas</div>';
        }
      }, 500);
    };

    // Disable text selection via CSS
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('beforeprint', handlePrint);
    document.addEventListener('mousedown', handleImageRightClick);

    // Start dev tools detection
    detectDevTools();

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('beforeprint', handlePrint);
      document.removeEventListener('mousedown', handleImageRightClick);
      
      // Reset styles
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      (document.body.style as any).mozUserSelect = '';
      (document.body.style as any).msUserSelect = '';
    };
  }, []);
}
