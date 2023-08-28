import Form from "@/components/Form";
import { getTopic, getTopics } from "@/utils/topicUtils";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "Topics | Edit topic",
	description: "This page contains a form to update an exesting topic.",
};

export const generateStaticParams = async () => {
	// function goes here
	const topics: TopicType[] = [];

	if (!topics) {
		return [];
	}

	return topics.map((topic) => {
		id: topic._id;
	});
};

const EditTopic = async ({ params: { id } }: { params: { id: string } }) => {
	const topic: TopicType = { _id: "", title: "", description: "" };
	// const topic = await getTopic(id);

	return (
		<main className="main">
			<Form type="edit" currentTopic={topic} />
		</main>
	);
};

export default EditTopic;
