;SDL
{Split 2}

{Request "dead"         {priority 50} {interrupt}}
{Request "corpse"        {priority 0}}

{Request "throwoff"     {priority 49} {interrupt}}
{Request "knock-down"     {priority 48} {interrupt}}
{Request "quick-up"      {priority 48}}

{Request "squat"      {priority 48}}

{Request "kick"         {priority 47} {interrupt}}
{Request "stop-heal-fast"  {priority 47} {interrupt}}
{Request "keep-knock-down"   {priority 47} {duration 2}}
{Request "recoil"      {priority 47}}
{Request "up"          {priority 47}}

{Request "stop-hold-back"  {priority 45}}
{Request "hold-item"    {priority 45}}
{Request "hold-nothing"    {priority 45}}
{Request "hold-bazooka"    {priority 45}}
{Request "board"      {priority 45}}

{Request "item-pick"     {priority 43}}
{Request "item-drop"    {priority 43}}
{Request "inventory-pick-stand"  {priority 43}}
{Request "inventory-pick"  {priority 43}}
{Request "inventory-drop"  {priority 43}}
{Request "bazooka-pick"    {priority 43}}
{Request "bazooka-drop"    {priority 43}}
{Request "belt-pick"    {priority 43}}
{Request "belt-drop"    {priority 43}}
{Request "pistol-pick"    {priority 43}}
{Request "pistol-drop"    {priority 43}}
{Request "throw"      {priority 43}}
{Request "switch-weapon"  {priority 43}}
{Request "pickup-stand"    {priority 43}}
{Request "pickup-hand"    {priority 43}}
{Request "pickup-bazooka"  {priority 43}}
{Request "ground-drop"    {priority 43}}

{Request "switch-move"    {priority 40}}
{Request "move"          {priority 40} {duration 5} {exit "stop-move"} {switch "walk" 1}}
{Request "swim"        {priority 40}}

{Request "unload"       {priority 30}}
{Request "unload-bazooka"   {priority 30}}
{Request "stop-rotate"    {priority 30}}
{Request "stop-repair"    {priority 30}}
{Request "stop-revive"    {priority 30}}
{Request "stop-animation"   {priority 30}}

{Request "unboard-to-ground"  {priority 30}}
{Request "unboard-to-water"    {priority 30}}
{Request "reload-bazooka"   {priority 30}}

{Request "hold-back"    {priority 27}}

{Request "fire-bazooka"   {priority 25}}
{Request "fire-rgrenade"   {priority 25}}
{Request "reload"       {priority 25}}
{Request "fire"       {priority 25}}
{Request "snipe"      {priority 25}}
{Request "aim"        {priority 25}{duration 5}}
{Request "aim-thrower"    {priority 25}}
{Request "aim-bazooka"    {priority 25}}
{Request "aim-rgrenade"    {priority 25}}

{Request "look-left-in"    {priority 22}{duration 15}}
{Request "look-right-in"  {priority 22}{duration 15}}
{Request "look-sleft-in"  {priority 22}{duration 15}}
{Request "look-sright-in"  {priority 22}{duration 15}}
{Request "peep-left-in"    {priority 22}{duration 15}}
{Request "peep-right-in"  {priority 22}{duration 15}}
{Request "squat-hide"    {priority 22}}
{Request "squat-cover"    {priority 22}}
{Request "grenade-lie"    {priority 22}}
{Request "grenade-cover"  {priority 22}}
{Request "rotate"      {priority 22} {duration 15} {exit "stop-rotate"}}
{Request "rotate-l45"    {priority 22}{duration 15}}
{Request "rotate-r45"    {priority 22}{duration 15}}
{Request "look-out"     {priority 22}{duration 15}}

{Request "down"          {priority 20}{exit "up"}{exit "quick-up"}{exit "reload"}{switch "walk" 1}}
{Request "quick-down"    {priority 15}{exit "up"}{exit "quick-up"}{exit "squat"}{exit "reload"}{duration 30}}
{Request "stop-move"    {priority 15}{exit "up"}{exit "quick-up"}{exit "squat"}{duration 18}{switch "walk" 0}}

{Request "rush"        {priority 10} {duration 12}{exit "stop-move"}}
{Request "revive"       {priority  5} {duration 2}}
{Request "lie_revive"     {priority  5}{exit "move"}{exit "up"}{exit "quick-up"}{exit "squat"}{duration 30}}

{Request "repair"       {priority  5} {duration 2} {exit "stop-repair"}}
{Request "heal-head"    {priority  5} {duration 1}}
{Request "heal-hand"    {priority  5} {duration 1}}
{Request "heal-leg"      {priority  5} {duration 1}}

{Request "step-aside-left"  {priority  2} {duration 1} {exit "stop-hold-back"}}
{Request "step-aside-right"  {priority  2} {duration 1} {exit "stop-hold-back"}}

{Request "animation"    {priority  0} {duration 1} {exit "stop-animation"}}
{Request "board-begin"    {priority  0}}
{Request "idle"       {priority  0}}
{Request "idle-prepare"   {priority  0}}

{Start "stand"}
