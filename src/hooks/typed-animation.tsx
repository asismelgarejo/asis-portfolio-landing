import { useEffect, useState } from "react";

type TypedPayload = {
	texts: string[];
};

const delay = 25;

export const useTypedAnimation = ({ texts }: TypedPayload) => {
	const [txt, setTxt] = useState("");
	const [idxFulltext, setIdxFulltext] = useState(0);

	const body_text = texts[idxFulltext].padStart(10);
	const [fullText, setFulltxt] = useState(body_text.padEnd(delay));

	const [index, setIndex] = useState(2);
	const [loop, setLoop] = useState({ reverse: false, goal: fullText.length, times: 0 });

	useEffect(() => {
		const myTimeout = setTimeout(() => {
			if (loop.times === 2) {
				let counter = idxFulltext + 1;
				if (counter === texts.length) counter = 0;
				const string = texts[counter].padStart(10).padEnd(delay);
				setIdxFulltext(counter);
				setFulltxt(string);
				setLoop({ reverse: false, goal: string.length, times: 0 });
			}
			let nI = index;
			setTxt(fullText.slice(0, nI));

			if (loop.reverse) nI--;
			else nI++;

			setIndex(nI);

			if (nI === loop.goal) {
				setLoop({
					reverse: !loop.reverse,
					goal: loop.goal === 0 ? fullText.length : 0,
					times: loop.times + 1,
				});
			}
		}, 60);
		return () => clearTimeout(myTimeout);
	}, [index]);

	return txt;
};
