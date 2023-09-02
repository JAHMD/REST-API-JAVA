export async function addTopic(newTopic: Partial<TopicType>) {
	await fetch(`http://localhost:8080/todos`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(newTopic),
	}).then((res) => res.json());
}

export async function editTopic(
	topicId: string,
	updatedTopic: Partial<TopicType>
) {
	await fetch(`http://localhost:8080/todos/${topicId}`, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(updatedTopic),
	}).then((res) => res.json());
}

export const getTopic = async (id: string) => {
	const res = await fetch(`http://localhost:8080/todos/${id}`);

	if (!res.ok) {
		throw new Error("Could not retrieve the topic.");
	}

	return res.json();
};

export const getTopics = async (): Promise<TopicType[]> => {
	const res = await fetch(`http://localhost:8080/todos`);

	if (!res.ok) {
		throw new Error("Could not retrieve the list of topics.");
	}

	return res.json();
};
