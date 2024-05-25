       const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    
    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });

         window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          } else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
          }
        }
