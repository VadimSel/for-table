import "./table.css";

export function Table() {
	const items = [1, 2, 3, 4, 5, "", 6, 7];

  function handler () {
    alert("Hello, world!")
  }

	return (
		<div className="container">
			{items.map((item, i) => {
				return (
					<div key={i} className={i === 5 ? "item0" :`item${item}`}>
						 <span onClick={i === 4 ? handler : undefined}>{item}</span>
					</div>
				);
			})}
		</div>
	);
}
