import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../immutable/chunks/index-62012ddc.js";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<head><style>.background{
		display:block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		width: 50%;
		padding: 20px 10px;
		background-color: #FFFFFF;
	}
	.img{
		display:block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
	.title{
		text-align:center;
  		padding: 50px 32px;
		font-size: 50px;
	}
	.descriptiveText{
		text-align:center;
  		padding: 25px 32px;
	}
	.button{
		display:block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		padding: 30px 10px;
		background-color: #FFFFFF;
	}
	.condition{
		display:block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
	}
	.conditionText{
		display:block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		text-align:center;
	}</style></head>

<div class="${"navbar shadow"}"><div class="${"navbar-start"}"><div class="${"navbar-start"}"><a href="${"."}" class="${"btn btn-square btn-ghost bg-accent"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" viewBox="${"0 0 24 24"}"><path fill="${"none"}" d="${"M0 0h24v24H0V0z"}" opacity="${".87"}"></path><path d="${"M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"}"></path></svg></a></div></div>
	<div class="${"navbar-center"}"><a href="${".."}" class="${"btn btn-ghost normal-case text-xl"}">Stanton Bookstore</a></div>
	<div class="${"navbar-end"}"></div></div>



<div class="${"flex-none card rounded-box place-items-center shadow-lg background"}"><div class="${"title"}"><h2>${escape(item.title)}</h2></div>
	<div class="${"artboard "}"><img class="${"max-w-sm rounded-lg shadow-2xl img"}"${add_attribute("src", item.image, 0)} alt="${"book"}"></div>

	<div><p class="${"conditionText"}">Condition: ${escape(item.condition)} (1 is bad, 10 is brand new)</p>
		<progress class="${"progress progress-info w-56 condition"}"${add_attribute("value", item.condition, 0)} max="${"10"}"></progress></div>

	<div class="${"descriptiveText"}"><p>${escape(item.description)}</p></div>

	<div class="${"descriptiveText"}"><p>Subject: ${escape(item.subject)}</p></div>

	<div style="${"text-align:center"}"><a href="${"1"}" role="${"button"}" class="${"btn btn-wide sm:btn-sm md:btn-md lg:btn-lg"}">Check Out</a></div></div>`;
});
export {
  U5Bidu5D as default
};
