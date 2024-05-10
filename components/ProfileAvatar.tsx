import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ProfileAvatarProps = TouchableOpacityProps & {
  uri: string;
};

const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { uri } = props;
  return (
    <TouchableOpacity style={styles.profileAvatar}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileAvatar;
