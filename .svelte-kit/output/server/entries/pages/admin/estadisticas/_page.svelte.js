import { a as attr, e as escape_html } from "../../../../chunks/attributes.js";
import { B as pop, z as push } from "../../../../chunks/index2.js";
import "../../../../chunks/toast.js";
import "apexcharts";
function _page($$payload, $$props) {
  push();
  const clp = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format;
  let loading = true;
  let stats = {
    total_orders: 0,
    last_30_count: 0,
    by_status: [],
    by_category: [],
    top_products: []
  };
  let visitPoints = [];
  function fmtDayLabel(dateStr) {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("es-CL", { day: "2-digit", month: "short" });
    } catch {
      return dateStr;
    }
  }
  ({
    series: [{ name: "Visitas", data: visitPoints.map((p) => p.visits) }],
    chart: {
      type: "area",
      height: 320,
      fontFamily: "inherit",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 3, colors: ["#0ea5e9"] },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#0ea5e9", opacity: 0.4 },
          { offset: 100, color: "#0ea5e9", opacity: 0.05 }
        ]
      }
    },
    xaxis: {
      categories: visitPoints.map((p) => fmtDayLabel(p.date)),
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#64748b", fontSize: "11px" } },
      tooltip: { enabled: false }
    },
    yaxis: {
      labels: {
        style: { colors: "#64748b", fontSize: "11px" },
        formatter: (val) => val.toFixed(0)
      }
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
      padding: { top: 0, right: 0, bottom: 0, left: 10 }
    },
    tooltip: {
      theme: "light",
      y: { formatter: (val) => `${val} visita(s)` }
    },
    colors: ["#0ea5e9"]
  });
  stats.by_category.length ? Math.max(...stats.by_category.map((c) => Number(c.total || 0))) : 1;
  stats.by_status.length ? Math.max(...stats.by_status.map((s) => Number(s.count || 0))) : 1;
  stats.top_products.length ? Math.max(...stats.top_products.map((p) => Number(p.qty || 0))) : 1;
  $$payload.out.push(`<section class="mx-auto max-w-7xl px-4 py-6 space-y-6"><header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div class="space-y-1"><h1 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Estadísticas de ventas y visitas</h1> <p class="text-slate-600 text-sm sm:text-base">Resumen de órdenes, ingresos, desempeño por estado/categoría/producto y visitas al sitio.</p></div> <div class="flex items-center gap-2"><button type="button" class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black disabled:opacity-60"${attr("disabled", loading, true)}>`);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z"></path></svg> Actualizando…`);
  }
  $$payload.out.push(`<!--]--></button></div></header> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="text-xs font-medium text-slate-500 mb-1">Órdenes pagadas</p> <p class="text-2xl font-semibold text-slate-900">${escape_html(stats.total_orders)}</p> <p class="mt-1 text-xs text-slate-500">Total de órdenes con estado <span class="font-semibold">pagada</span>.</p></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="text-xs font-medium text-slate-500 mb-1">Ingresos totales</p> <p class="text-2xl font-semibold text-slate-900">${escape_html(clp(0))}</p> <p class="mt-1 text-xs text-slate-500">Considerando sólo órdenes pagadas.</p></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="text-xs font-medium text-slate-500 mb-1">Últimos 30 días</p> <p class="text-2xl font-semibold text-slate-900">${escape_html(clp(0))}</p> <p class="mt-1 text-xs text-slate-500">${escape_html(stats.last_30_count)} orden(es) pagada(s) en los últimos 30 días.</p></div> <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="text-xs font-medium text-slate-500 mb-1">Ticket promedio (30 días)</p> <p class="text-2xl font-semibold text-slate-900">${escape_html("—")}</p> <p class="mt-1 text-xs text-slate-500">Promedio por orden pagada del último mes.</p></div></div> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><div class="h-64 rounded-2xl bg-slate-100 animate-pulse"></div> <div class="h-64 rounded-2xl bg-slate-100 animate-pulse"></div> <div class="h-64 rounded-2xl bg-slate-100 animate-pulse"></div></div>`);
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
export {
  _page as default
};
