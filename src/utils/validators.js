export function parseTags(tagsString) {
	const tags = tagsString.split(',');
	const trimmedTags = tags.map((tag) => tag.trim());
	return trimmedTags;
}
