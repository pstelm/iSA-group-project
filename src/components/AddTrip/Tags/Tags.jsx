import React from 'react';
import styles from './Tags.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';

const Tags = ({ tags, selectedTags, setSelectedTags }) => {
	const tagsContainerRef = useRef();

	const handleTagClick = (tag) => {
		const tagName = tag.target.innerText;

		if (selectedTags.includes(tagName)) {
			setSelectedTags(
				selectedTags.filter((selectedTag) => selectedTag !== tagName)
			);
		} else {
			setSelectedTags([...selectedTags, tagName]);
		}
	};

	useEffect(() => {
		const buttons = tagsContainerRef.current.children;
		Array.from(buttons).forEach((button) => {
			if (selectedTags.includes(button.innerText)) {
				button.classList.add(styles.tag_selected);
			} else {
				button.classList.remove(styles.tag_selected);
			}
		});
	}, [selectedTags]);

	return (
		<div className={styles.tags_container} ref={tagsContainerRef}>
			{tags.map((tag) => {
				return (
					<button
						type='button'
						onClick={handleTagClick}
						key={tag}
						className={styles.tag}
					>
						{tag}
					</button>
				);
			})}
		</div>
	);
};

export default Tags;
