import { useChatStore } from '../store/useChatStore';
import { PROFILE_PICTURES } from '../constants/profilePictures';
import './ProfilePicturePicker.css';

export function ProfilePicturePicker() {
  const profilePictureIndex = useChatStore((s) => s.profilePictureIndex);
  const setProfilePictureIndex = useChatStore((s) => s.setProfilePictureIndex);

  return (
    <div className="profile-picker">
      <p>Profile Picture</p>
      <div className="profile-picker-options">
        {PROFILE_PICTURES.map((pic, index) => (
          <button
            key={index}
            className={`profile-picker-option${index === profilePictureIndex ? ' selected' : ''}`}
            onClick={() => setProfilePictureIndex(index)}
          >
            <img src={pic} alt={`Profile ${index}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
