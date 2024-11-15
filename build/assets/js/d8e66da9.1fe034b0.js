(self.webpackChunkdyte_docs = self.webpackChunkdyte_docs || []).push([
  [37238],
  {
    41074: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => u });
      var l = n(96540),
        a = n(37944),
        r = n(20053),
        c = n(13338),
        s = n(17747),
        i = n(8566);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          l,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              l,
              a = {},
              r = Object.keys(e);
            for (l = 0; l < r.length; l++)
              (n = r[l]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (l = 0; l < r.length; l++)
            (n = r[l]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      const u = (0, l.forwardRef)((e, t) => {
        var {
            defaultValue: n = '',
            values: u = [],
            children: d,
            className: I,
          } = e,
          b = o(e, ['defaultValue', 'values', 'children', 'className']);
        return l.createElement(
          a.bL,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (l = l.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                l.forEach(function (t) {
                  m(e, t, n[t]);
                });
            }
            return e;
          })({ defaultValue: n, ref: t }, b),
          l.createElement(
            a.l9,
            {
              'aria-label': 'Select Section',
              className: (0, r.A)('sections-menu-trigger', I),
            },
            l.createElement(a.WT, null),
            l.createElement(
              a.In,
              null,
              l.createElement(c.A, { className: 'sections-menu-scrollButton' })
            )
          ),
          l.createElement(
            a.UC,
            { className: (0, r.A)('sections-menu-content', I) },
            l.createElement(
              a.PP,
              { className: 'sections-menu-scrollButton' },
              l.createElement(s.A, null)
            ),
            l.createElement(
              a.LM,
              null,
              l.createElement(
                a.YJ,
                null,
                u.map(({ docId: e, name: t, icon: n, disabled: c = !1 }) =>
                  l.createElement(
                    a.q7,
                    {
                      value: e,
                      key: e,
                      className: (0, r.A)('sections-menu-item'),
                      disabled: c,
                    },
                    l.createElement(
                      a.p4,
                      null,
                      l.createElement(
                        'div',
                        { className: 'item-text text-text-400' },
                        n && l.createElement(n, null),
                        l.createElement('span', null, t)
                      )
                    ),
                    l.createElement(
                      a.VF,
                      { className: 'flex items-center' },
                      l.createElement(i.A, { className: 'item-indicator' })
                    )
                  )
                ),
                d
              )
            ),
            l.createElement(
              a.wn,
              { className: 'sections-menu-scrollButton' },
              l.createElement(c.A, null)
            )
          )
        );
      });
    },
    98435: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => h });
      var l = n(96540),
        a = n(55017),
        r = n(3248),
        c = n(65354),
        s = n(63581),
        i = n(56347),
        m = n(20053);
      var o = n(41074);
      const u =
        "https://god.gw.postman.com/run-collection/20897959-a72828d7-8739-49ac-b88c-c5e6ec365e21?action=collection%2Ffork&collection-url=entityId%3D20897959-a72828d7-8739-49ac-b88c-c5e6ec365e21%26entityType%3Dcollection%26workspaceId%3D2f2f3a0e-92e0-4621-82b5-7e139570b3af#?env%5BDyte's%20Public%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkuY2x1c3Rlci5keXRlLmluIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6ImFwaWtleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6Im9yZ2FuaXphdGlvbl9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6Im1lZXRpbmdfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJwYXJ0aWNpcGFudF9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6InJlY29yZGluZ19pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6InJvb21fbmFtZSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IndlYmhvb2tfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJsaXZlc3RyZWFtX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5Ijoic2Vzc2lvbl9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=";
      function d() {
        return l.createElement(
          'a',
          {
            href: u,
            target: '_blank',
            rel: 'noreferrer',
            'aria-label': 'Run in Postman',
          },
          l.createElement('img', {
            src: 'https://run.pstmn.io/button.svg',
            alt: 'Run in Postman',
            width: 128,
            height: 32,
          })
        );
      }
      var I = n(80920),
        b = n(28618),
        f = n(72384);
      function Z({ layout: e = 'sidebar', currentVersion: t = 'v1' }) {
        return l.createElement(
          c.A,
          {
            fallback: l.createElement(
              'div',
              { className: 'loading-container' },
              l.createElement(s.DyteSpinner, null)
            ),
          },
          () => {
            const { API: a } = n(99470);
            return l.createElement(
              'div',
              { className: (0, m.A)('elements-container', e) },
              l.createElement(a, {
                className: 'stacked',
                apiDescriptionUrl: `/api/${t}.yaml`,
                basePath: '/',
                router: 'hash',
                layout: e,
                hideSchemas: !0,
                hideInternal: !0,
              })
            );
          }
        );
      }
      function h() {
        const e = (0, i.W6)(),
          t = (function () {
            const [e, t] = (0, l.useState)('lg');
            return (
              (0, l.useEffect)(() => {
                if ('undefined' == typeof document) return;
                const e = new ResizeObserver(() => {
                  t(document.body.clientWidth > 996 ? 'lg' : 'sm');
                });
                return (
                  e.observe(document.body),
                  () => {
                    e.disconnect();
                  }
                );
              }, []),
              e
            );
          })(),
          n = e.location,
          c =
            new URL(
              `https://docs.dyte.io${n.pathname}${n.search}`
            ).searchParams.get('v') || 'v2';
        return l.createElement(
          a.A,
          {
            title: `API ${'v2' === c ? 'v2 ' : ''}Documentation`,
            description:
              'v2' === c
                ? "Dive into Dyte's API v2 documentation, offering advanced features and functionalities."
                : "Explore the comprehensive API documentation provided by Dyte. Learn how to integrate and leverage Dyte's API.",
            noFooter: !0,
            wrapperClassName: 'api-reference',
          },
          l.createElement(
            r.A,
            null,
            l.createElement(
              'title',
              null,
              'API Documentation | Fleet Stack Documentation'
            ),
            l.createElement('link', {
              rel: 'preload',
              href: '/assets/css/elements.min.css',
              as: 'style',
            }),
            l.createElement('link', {
              rel: 'stylesheet',
              href: '/assets/css/elements.min.css',
            }),
            l.createElement('meta', {
              name: 'description',
              content:
                "Explore the comprehensive API documentation provided by Dyte. Learn how to integrate and leverage Dyte's API.",
            })
          ),
          l.createElement(
            'div',
            {
              className:
                'flex flex-col items-center justify-center gap-4 border-b py-12 text-sm lg:hidden',
            },
            l.createElement(I.A, { className: 'h-12 w-12' }),
            'This page is best viewed in a desktop browser.'
          ),
          l.createElement(
            'div',
            { className: 'header' },
            l.createElement(
              'h1',
              {
                className:
                  'mb-0 flex items-center gap-2 text-sm font-semibold lg:text-lg',
              },
              l.createElement(f.APIIcon, { className: 'hidden h-8 lg:block' }),
              'REST API'
            ),
            l.createElement(
              'div',
              { className: 'aside' },
              'v2' === c &&
                l.createElement(
                  b.A,
                  {
                    href: '/release-notes/rest-api',
                    className: 'no-underline-links text-xs',
                  },
                  'Release Notes'
                ),
              'lg' === t && l.createElement(d, null),
              l.createElement(o.A, {
                defaultValue: c,
                values: [
                  { name: 'v1', docId: 'v1' },
                  { name: 'v2', docId: 'v2' },
                ],
                onValueChange: (t) => {
                  e.push(`/api/?v=${t}`);
                },
                className: 'compact',
              })
            )
          ),
          l.createElement(Z, {
            layout: 'sm' === t ? 'stacked' : 'sidebar',
            currentVersion: c,
          })
        );
      }
    },
    81028: () => {},
  },
]);
