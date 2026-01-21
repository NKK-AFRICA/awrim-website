import { reactive } from 'vue';

export const sidebarStore = reactive({
    isExpanded: true,
    isHovered: false,
    isMobileOpen: false,

    toggleSidebar() {
        this.isExpanded = !this.isExpanded;
    },

    toggleMobileSidebar() {
        this.isMobileOpen = !this.isMobileOpen;
    },

    setIsHovered(value) {
        this.isHovered = value;
    }
});
