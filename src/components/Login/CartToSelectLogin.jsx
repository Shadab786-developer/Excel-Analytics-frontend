import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./CartToSelect.module.css";

function CartToSelectLogin() {
  const location = useLocation();

  const isCompany =
    location.pathname.includes("/login/admin") ||
    location.pathname === "/login";
  const isCandidate = location.pathname.includes("/login/user");

  return (
    <div className="min-h-screen bg-white p-4">
      <div className={styles.container}>
        <h2 className={styles.title}>Choose Your Path</h2>

        <div className={styles.cardContainer}>
          <Link to="/login/admin">
            <div
              className={`${styles.card} ${isCompany ? styles.activeCard : ""}`}
            >
              <h3 className={styles.cardTitle}> Admin</h3>
              <p className={`styles.cardDescription hidden sm:flex`}>
                Login as an Admin to manage Resources and upload the Updated
                information
              </p>
            </div>
          </Link>

          <Link to="/login/user">
            <div
              className={`${styles.card} ${
                isCandidate ? styles.activeCard : ""
              }`}
            >
              <h3 className={styles.cardTitle}>User</h3>
              <p className={`styles.cardDescription hidden sm:flex`}>
                Login as a User to Access the Resources for better Preparation
              </p>
            </div>
          </Link>
        </div>

        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CartToSelectLogin;
