import '@radix-ui/themes/styles.css';
import { ArrowUpIcon } from '@radix-ui/react-icons';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //         button.style.display = "block";
        //     } else {
        //         button.style.display = "none";
        //     }
    };

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-14 bg-cyan-500 text-white p-5
      rounded-full shadow-lg shadow-slate-900 hover:bg-cyan-700 transition"
        >
            <ArrowUpIcon width={'18'} height={'18'} />
        </button>
    );
};

export default ScrollToTopButton;