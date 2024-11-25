import { useAuth } from '../auth';

function LoginModal({ onReqClose }) {
  const { signIn } = useAuth();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const formObj = {};

    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    signIn(formObj.username, formObj.password);
  }

  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__layout">
          <div className="modal__header"></div>
          <div className="modal__body">
            <form onSubmit={handleSubmit}>
              <div className="modal__form">
                <div>
                  <input type="text" name="username" />
                </div>
                <div>
                  <input type="text" name="password" />
                </div>
              </div>
              <div>
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal__close-btn">
        <button onClick={onReqClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginModal;
