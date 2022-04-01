import styles from "./teams.module.css"
import sample from "../../media/sample.jpg"
import MemberCard from "./TeamMemberCard";

export default function Team() {
	return (
		<div className={styles.team}>
			<h1 className={styles.heading}>Our Team</h1>
			<div className={styles.memberGrid}>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			<MemberCard facebook="https://facebook.com" image={sample} insta="https://instagram.com" linkedin="https://linkedin.com" name="Member Name" post="Designation" year="2020"></MemberCard>
			</div>

		</div>
	);
}
