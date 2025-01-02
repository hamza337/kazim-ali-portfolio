export function AdminFooter() {
    const currentYear = new Date().getFullYear(); // Get the current year in JavaScript

    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                    <div className="text-body font-sm">
                       <small> © {currentYear}, made by 
                        <a href="https://xodeactech.com" target="_blank" className="footer-link"> XODEAC</a></small>
                    </div>
                </div>
            </div>
        </footer>
    );
}