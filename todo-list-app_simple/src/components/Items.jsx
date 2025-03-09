import SingleItem from "./SingleItem";

export default function Items({ items, removeItem, editItem }) {
  return (
    <section>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
}
